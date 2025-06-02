import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./FormularioContato.module.css";

type FormData = {
  email: string;
  assunto: string;
  mensagem: string;
  urgente: boolean;
};

export default function FormularioContato() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSuccess(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input 
            {...register("email", { required: "Email é obrigatório!", pattern: { value: /^\S+@\S+$/i, message: "E-mail inválido" }})} 
            placeholder="E-mail"
            className={styles.input}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}

        <input 
            {...register("assunto", { required: "Assunto é obrigatório!" })}  
            placeholder="Assunto"
            className={styles.input}
        />
        {errors.assunto && <p className={styles.error}>{errors.assunto.message}</p>}

        <textarea 
            {...register("mensagem", { required: "Mensagem é obrigatória", minLength: { value: 10, message: "Mínimo 10 caracteres" } })}
            placeholder="Mensagem"
            rows={4}
            className={styles.textarea}
        />
        {errors.mensagem && <p className={styles.error}>{errors.mensagem.message}</p>}

        <label className={styles.checkboxLabel}>
            <input type="checkbox" {...register("urgente")} />
            Urgente
        </label>

      <button type="submit" className={styles.button}>Enviar</button>

      {success && <p className={styles.success}>Mensagem enviada com sucesso!</p>}
    </form>
  );
}
