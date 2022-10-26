import { useEffect, useState } from "react";

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào dom
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [dependencies])
// - Callback sẽ được gọi lại mỗi khi dependencies thay đổi

// ------
// 1. Call back luôn được gọi sau khi component mounted

const tabs = ["posts", "comments", "albums"];

function UseEffect() {
  const [isDisplay, setIsDisplay] = useState(false);
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoTotop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
    // document.title = title;
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoTotop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    // - Luôn được gọi trước khi unmounted
    // - Luôn được gọi trước khi callback được gọi (trừ lần mounted)
    return () => {
      console.log("Unmounting....");
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function goToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="App" style={{ padding: 20 }}>
      <button onClick={() => setIsDisplay(!isDisplay)}>Toggle</button>
      {isDisplay && (
        <div>
          {tabs.map((tab) => (
            <button
              key={tab}
              style={
                type === tab
                  ? {
                      color: "#fff",
                      backgroundColor: "#333",
                    }
                  : {}
              }
              onClick={() => setType(tab)}
            >
              {tab}
            </button>
          ))}
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <ul>
            {posts.map((post) => (
              <li key={post?.id}>{post?.title || post?.name}</li>
            ))}
          </ul>
          {showGoToTop && (
            <button
              style={{
                position: "fixed",
                right: 20,
                bottom: 20,
              }}
              onClick={() => goToTop()}
            >
              Go to Top
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default UseEffect;
