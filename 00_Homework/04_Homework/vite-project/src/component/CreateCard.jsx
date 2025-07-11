import { useForm } from 'react-hook-form';

export default function CreateCard({onCreate}) {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            src: 'https://content2.rozetka.com.ua/goods/images/big/195944358.jpg',
            productDescription: '0',
            reviews: 0,
            inStock: true,
            price: 0,
            discount: 0,
        }
    });
    
    function onSubmit(card) {
        console.log(card);

        onCreate(card);
    }

    return ( 
        <>

            <form className="CreateCard" onSubmit={handleSubmit(onSubmit)}>
            <h2>Створити картку</h2>
            <div className="form-table">
                <label>
                Зображення (URL):
                <input {...register("src")} type="text" />
                </label>
                <label>
                Опис продукту:
                <input {...register("productDescription")} type="text" />
                </label>
                <label>
                Кількість відгуків:
                <input {...register("reviews")} type="number" />
                </label>
                <label>
                В наявності:
                <input {...register("inStock")} type="checkbox" />
                </label>
                <label>
                Ціна:
                <input {...register("price")} type="number" />
                </label>
                <label>
                Знижка:
                <input {...register("discount")} type="number" />
                </label>
            </div>
            <button type="submit">Створити картку</button>
            </form>


        </>
    );
}