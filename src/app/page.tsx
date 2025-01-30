import Question, { FormHandeling, Present } from "./Prerana/question";

export default function Home() {
  return (
    <div className="flex justify-center">
      <h1>Welcome!!</h1>
      <div>
        <Question name="Prerana" age={25} />
        <Present/>
        <FormHandeling/>
      </div>
    </div>

  );
}


