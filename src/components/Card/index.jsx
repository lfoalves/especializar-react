import './styles.css'

export function Card(props) {

    return(
        <>
            {
                !props.name || !props.time ? '' :
                <div className='card'>
                    <strong>{props.name ? props.name : 'USUÁRIO'}</strong>
                    <small>{props.time ? props.time : 'TIME'}</small>
                </div>
            }
        </>
    );
}