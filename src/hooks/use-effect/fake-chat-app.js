import { useEffect, useState } from "react";

const lessons = [
  {
    id: 1,
    name: "Introduction",
  },
  {
    id: 2,
    name: "Getting Started",
  },
  {
    id: 3,
    name: "Components",
  },
];

function FakeChatApp() {
  const [lessionId, setLessionId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };
    window.addEventListener(`lesson-${lessionId}`, handleComment);

    return () =>
      window.removeEventListener(`lesson-${lessionId}`, handleComment);
  }, [lessionId]);

  return (
    <div>
      <ul>
        {lessons.map((lession) => (
          <li
            key={lession.id}
            style={{
              color: lessionId === lession.id ? "red" : "#333",
            }}
            onClick={() => setLessionId(lession.id)}
          >
            {lession.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FakeChatApp;
