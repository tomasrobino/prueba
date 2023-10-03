import Dropdown from './Dropdown'
import styles from './page.module.css'
import { getCurso, getFacu, getGrado, getUni } from './requests';

export default async function Home(searchParams) {
    const universidades = await getUni();
    var facuCode;
    if (searchParams.searchParams.code !== undefined && searchParams.searchParams.code.length > 3) {
        facuCode = searchParams.searchParams.code.toString();
        if (searchParams.searchParams.code.length > 6) {
            facuCode = facuCode.slice(-8,-5);
        } else {
            facuCode = facuCode.slice(1)
        }
        console.log("fff")
        console.log(facuCode);
    }
    const facultades = await getFacu(facuCode);

    var gradoCode;
    if (searchParams.searchParams.code !== undefined && searchParams.searchParams.code.length > 4) {
        gradoCode = searchParams.searchParams.code;
    }
    const grados = await getGrado(gradoCode);

    return (
        <main className={styles.main}>
            <div>
                <Dropdown info={universidades.data} type="Universidades"/>
                <Dropdown info={facultades.data} type="Facultades"/>
                <Dropdown info={grados.data} type="Grados"/>
            </div>
        </main>
    )
}
