import React from "react";
import { styles} from "./style";

function App() {
  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <div style={styles.logo}>Aboutme</div>
        <button style={styles.btnCta}>hello</button>
      </header>

      <div style={styles.container}>
        <div style={styles.intro}>
          <h1 style={styles.title}>Hai, Perkenalkan nama saya Habib.</h1>
          <p style={styles.description}>
            Selamat datang di website portofolio React pertama saya.
          </p>
        </div>
      </div>

      <footer style={styles.about}>
        <p>© 2025 Habib</p>
      </footer>
    </div>
  );
}

export default App;
