import { useEffect, useState } from "react"
import axios from "axios";
import { Estatistcs } from "../../components/EstatisticCards";
import type { IEstatistics } from "../../components/EstatisticCards/interfaces";
import { Container, Content, Question } from "./styles";

export const Dashboard = () => {

 const [question, setQuestion] = useState("");
  const [type, setType] = useState("truth"); // truth | dare | wyr | nhie
  const [rating, setRating] = useState("r"); // pg | pg13 | r
    

async function fetchQuestion() {

    const res = await fetch(`https://api.truthordarebot.xyz/v1/${type}?rating=${rating}`);
    const data = await res.json();
    // Aqui você poderia traduzir automaticamente se quiser
    translateToPortuguese(data.question);
  }

  async function translateToPortuguese(text: string) {
  const res = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|pt-BR`
  );
  const data = await res.json();
  setQuestion(data.responseData.translatedText);
}


  useEffect(() => {
    fetchQuestion();
  }, [type, rating]);

    return (
         <Container>
      <h1 className="text-2xl font-bold capitalize">{type}</h1>
      <p className="text-lg max-w-md">{question || "Carregando..."}</p>

      <div className="flex gap-2">
        <button onClick={() => fetchQuestion()} className="bg-pink-500 text-white px-4 py-2 rounded-2xl shadow-md hover:bg-pink-600">
          Próxima pergunta
        </button>
      </div>

    <Content>
      <Question>
        <button onClick={() => setType("truth")} className="px-3 py-1 rounded bg-gray-200">Verdade</button>
        <button onClick={() => setType("dare")} className="px-3 py-1 rounded bg-gray-200">Desafio</button>
        <button onClick={() => setType("wyr")} className="px-3 py-1 rounded bg-gray-200">Você prefere</button>
      </Question>

      <Question>
        <button onClick={() => setRating("pg")}>Leve</button>
        <button onClick={() => setRating("pg13")}>Médio</button>
        <button onClick={() => setRating("r")}>Picante 🔥</button>
      </Question>
      </Content>
    </Container>
    )
}