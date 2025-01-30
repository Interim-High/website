"use client"
import ButtonComponent from "@/components/home/Button";
import CardComponent from "../components/home/Card";
import ContainerComponent, { Second } from "@/components/home/Conatiner";
import Question, { FormHandling, Present } from "./Prerana/question";

export default function Home() {
  const handleClick=() =>{
    alert("button Clicked");
  }
  return (
    <div className="flex justify-center">
      <h1>Welcome!!</h1>
      <div>
        <Question name="Prerana" age={25} />
        <Present/>
        <FormHandling/>
        <CardComponent title = "HHHHH" description="describe please"/>
        {/* <ButtonComponent onClick={handleClick} label="More"/> */}

        <ContainerComponent children/>
        <Second children/>

      </div>
    </div>

  );
}


