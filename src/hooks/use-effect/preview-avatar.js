import { useEffect, useState } from "react";

function PreviewAvatar() {
  // const [count, setCount] = useState(1);

  // useEffect(() => {
  //   console.log("Mounted or Re-render");

  //   return () => {
  //     console.log("Cleanup");
  //   };
  // }, [count]);
  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={() => setCount(count + 1)}>Click me!</button>
  //   </div>
  // );

  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => avatar && URL.revokeObjectURL(avatar.preview);
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);

    setAvatar(file);
    e.target.value = null;
  };

  return (
    <>
      <div
        style={{ border: "1px solid yellowgreen", padding: 20, marginTop: 8 }}
      >
        <input type="file" onChange={handlePreviewAvatar} />

        {avatar && (
          <img
            style={{ marginTop: 8 }}
            src={avatar.preview}
            alt=""
            width="80%"
          />
        )}
      </div>
    </>
  );
}

export default PreviewAvatar;
