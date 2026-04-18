import Link from "next/link";
import styles from "./register.module.css";

const TampilanRegister = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Halaman Register</h1>

      <form className={styles.form}>
        <input
          type="text"
          placeholder="Nama"
          className={styles.input}
        />

        <input
          type="email"
          placeholder="Email"
          className={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          className={styles.input}
        />

        <button className={styles.button}>
          Register
        </button>
      </form>

      <p className={styles.loginLink}>
        Sudah punya akun?{" "}
        <Link href="/auth/login">Ke Halaman Login</Link>
      </p>
    </div>
  );
};

export default TampilanRegister;