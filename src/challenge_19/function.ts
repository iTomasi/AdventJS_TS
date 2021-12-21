/*
Con motivo de las fechas más bonitas del año, en Platzi han lanzado una promoción muy especial porque la educación es un regalo 🎁 para siempre.

En Platzi tienen más de 800 cursos 📚 pero, claro, nuestro tiempo es limitado. Así que vamos a optimizar nuestro tiempo disponible para completar dos cursos usando el máximo número de horas disponible.

Tenemos que crear una función que recibe dos parámetros. El primero es el número de horas que tenemos disponible ⏳ y el segundo es un array donde cada índice es un curso y el valor el tiempo que se tarda en completar.

Tenemos claro que queremos hacer dos cursos así que la función debe devolver un array con el índice de los dos cursos que vamos a poder completar con el tiempo disponible proporcionado y usando el máximo tiempo disponible. Si no nos da tiempo, devolvemos null

Vamos a ver unos ejemplos:

learn(10, [2, 3, 8, 1, 4]) // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.

learn(15, [2, 10, 4, 1]) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.

learn(25, [10, 15, 20, 5]) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos

learn(8, [8, 2, 1]) // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.

learn(8, [8, 2, 1, 4, 3]) // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.

learn(4, [10, 14, 20]) // null -> no nos da tiempo a hacer dos cursos

learn(5, [5, 5, 5]) // null -> no nos da tiempo a hacer dos cursos
*/

const learn = (time: number, courses: number[]) => {
    console.log(courses)
    const course_0 = {
        index: 0,
        value: 0
    }

    const course_1 = {
        index: 0,
        value: 0
    }

    for (let i = 0; i < courses.length; i++) {
        const value = courses[i];

        const findIndex = courses.findIndex((num) => num + value === time)

        if (findIndex !== -1 && findIndex !== i) {
            if (courses[findIndex] === value) {
                course_1.index = i;
                course_1.value = value;
                course_0.index = findIndex;
                course_0.value = courses[findIndex];
                break
            }
            course_0.index = i;
            course_0.value = value;
            course_1.index = findIndex;
            course_1.value = courses[findIndex];
            break
        }

        else if (value > course_0.value && value + course_1.value < time) {
            course_0.index = i;
            course_0.value = value;
        }

        else if (value > course_1.value && value + course_0.value < time) {
            course_1.index = i;
            course_1.value = value;
        }
    }

    console.log({ course_0 });
    console.log({ course_1 })

    if (!course_0.value || !course_1.value) return null

    return [course_0.index, course_1.index]
}

export { learn };