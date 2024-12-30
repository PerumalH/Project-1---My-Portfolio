import { useForm } from "react-hook-form";
import emailjs from "emailjs-com/";
import Container from "../Components/Container";
import "../style/sass/pages/_exciteme.scss";
import useSendTask from "../Hooks/useSendTask";
import Loader from "../Components/Loader";
import InfoBar from "../Components/InfoBar";
import { useRef, useState } from "react";
import { Link } from "react-router";

const ExciteMe = () => {
  const { loading, SendTaskAPI } = useSendTask();
  const [loadingMail, setloadingMail] = useState(false);
  const [error, setError] = useState(false);
  const [Message, setMessage] = useState(false);
  const { register, handleSubmit, reset: reset1 } = useForm();

  const { register: register1, handleSubmit: handleSubmit1, reset } = useForm();
  const EmailForm = useRef();
  const onSubmitTask = async (data) => {
    await SendTaskAPI(data);
    reset();
    setMessage(true);
    const timer = setTimeout(() => {
      setMessage(false);
    }, 2500);

    return () => clearTimeout(timer);
  };

  const onSubmit = async () => {
    try {
      setloadingMail(true);
      const response = await emailjs.sendForm(
        "service_392yfvb",
        "template_hatptk5",
        EmailForm.current,
        "87fL3oiKzwgOi8kWh"
      );

      if (response.status) {
        setMessage(true);
      }
    } catch {
      setError(true);
    } finally {
      reset1();
      setloadingMail(false);
    }

    const timer = setTimeout(() => {
      setMessage(false);
      setError(false);
    }, 2500);

    return () => clearTimeout(timer);
  };

  return (
    <Container container={"Container-2"}>
      {(Message || error) && (
        <InfoBar
          classname={error ? "Warn" : "Success"}
          Message={
            error
              ? "OOPS! - SOMETHING WENT WRONG!"
              : "I'M EXCITED, I'll CATCH YOU SOON!"
          }
        />
      )}
      {(loading || loadingMail) && <Loader />}

      <div className="exploreAgain">
        <p>{"I hope you got to "}</p>
        <Link to={"/explore-me"}>Explore-ME</Link>
      </div>
      <div className="rediscover">
        <Link to={"/"}>Rediscover-ME</Link>
      </div>
      <div className="form1">
        <h2>Contact-ME</h2>
        <form ref={EmailForm} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register("from_email", {
                required: "*required",
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
          </div>

          <div>
            <label htmlFor="message" className="message">
              Message
            </label>
            <textarea
              placeholder="Compose your message here, and don’t forget to include your name!"
              id="message"
              {...register("message", { required: "*required" })}
            />
          </div>

          <button type="submit">Email-ME</button>
        </form>
      </div>
      <div className="form2">
        <h2>Challenge-ME</h2>
        <form onSubmit={handleSubmit1(onSubmitTask)}>
          <div>
            <label>Task Details -(Default and Clear)</label>
            <textarea
              {...register1("taskDetail", { required: "*required" })}
              placeholder="Provide a detailed task description"
            />
          </div>
          <button type="submit">Task-ME</button>
        </form>
      </div>
    </Container>
  );
};

export default ExciteMe;
