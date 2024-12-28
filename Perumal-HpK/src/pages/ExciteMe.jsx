import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Container from "../Components/Container";
import "../style/sass/pages/_exciteme.scss";
import useSendTask from "../Hooks/useSendTask";
import Loader from "../Components/Loader";
import InfoBar from "../Components/InfoBar";
import { useState } from "react";

const ExciteMe = () => {
  const { loading, SendTaskAPI } = useSendTask();
  const [Message, setMessage] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { register: register1, handleSubmit: handleSubmit1, reset } = useForm();

  const onSubmitTask = async (data) => {
    await SendTaskAPI(data);
    reset();
    setMessage(true);
    const timer = setTimeout(() => {
      setMessage(false);
    }, 1500);

    return () => clearTimeout(timer);
  };

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Your EmailJS template ID
        data, // Form data
        "YOUR_USER_ID" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result);
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log(error);
          alert("Message Not Sent. Try Again Later");
        }
      );
  };

  return (
    <Container container={"Container-2"}>
      {Message && <InfoBar classname={"Success"} Message={"I'M EXCITED!"} />}
      {loading && <Loader />}

      <div className="exploreAgain">
        <p>{"I hope you got to "}</p>
        <a href="/explore-me">Explore-ME</a>
      </div>
      <div className="rediscover">
        <a href="/">Rediscover-ME</a>
      </div>
      <div className="form1">
        <h2>Contact-ME</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              {...register("email", {
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
              placeholder="Compose Your Email"
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
