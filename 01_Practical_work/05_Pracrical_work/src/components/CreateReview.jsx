import { useForm } from 'react-hook-form';

export default function CreateReview({ onCreate }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "User",
            rating: 3,
            comment: "None",
            advantages: "None",
            disadvantages: "None",
            date: new Date().toISOString().split('T')[0],
        }
    });

    function onSubmit(review) {
        console.log(review);

        onCreate(review);
    }

    return (
        <>
            <h2>Оцініть товар</h2>
            <form className="CreateReview" onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Ім'я користувача
                    <input {...register("username")} type="text" name="username" />
                </label>
                <label>
                    Ваша оцінка
                    <input {...register("rating")} type="number" min="1" max="5" placeholder="1-5" name="rating" />
                </label>
                <label>
                    Коментар
                    <input {...register("comment")} type="text" name="comment" />
                </label>
                <label>
                    Переваги
                    <input {...register("advantages")} type="text" name="advantages" />
                </label>
                <label>
                    Недоліки
                    <input {...register("disadvantages")} type="text" name="disadvantages" />
                </label>
                <label>
                    Дата
                    <input {...register("date")} type="date" name="date" />
                </label>
                <button type='submit'>Create</button>
            </form>
        </>
    );
}
