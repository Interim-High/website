// Create a Card component that accepts title (string) and description (string) as props.


interface Card{
    title : string,
    description : string
}


const CardComponent : React.FC<Card> = ({title , description})=> {
    return (
    <h1>{title} and {description}</h1>
 )

}
// CardComponent({title :"jhbfvfs",description:"nierbvgkds"});
export default CardComponent;