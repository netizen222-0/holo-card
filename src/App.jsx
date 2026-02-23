import fieldImage from "./assets/hololive_cardgame_field.jpg";

function Zone({ top, left, label }) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        transform: "translate(-50%, -50%)",
        width: "10%",
        aspectRatio: "2 / 3",
        border: "2px solid red",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "12px",
      }}
    >
      {label}
    </div>
  );
}

function Field({ flipped }) {
  return (
    <div style={halfContainer}>
      <div style={boardWrapper}>
        <img
          src={fieldImage}
          alt="field"
          style={{
            width: "100%",
            height: "100%",
            transform: flipped ? "rotate(180deg)" : "none",
          }}
        />

        {/* ゾーン（画像基準） */}
        <Zone top="48%" left="50%" label="Center" />
        <Zone top="48%" left="30%" label="Collab" />
        <Zone top="48%" left="70%" label="Oshi" />
        <Zone top="40%" left="88%" label="Deck" />
        <Zone top="75%" left="88%" label="Archive" />
        <Zone top="50%" left="8%" label="Life" />
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={container}>
      <Field flipped={true} />
      <Field flipped={false} />
    </div>
  );
}

const container = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  backgroundColor: "black",
};

const halfContainer = {
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const boardWrapper = {
  position: "relative",
  height: "100%",
  aspectRatio: "16 / 9", // ← ここ超重要（画像の比率に合わせる）
};

export default App;
