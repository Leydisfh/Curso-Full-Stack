export const Filter = ({search, onChange}) =>{
    return(

     
        <p>
        filter shown with: 
        <input type='text'
        value={search}
        onChange={onChange}
        />
        </p>
    
        )
}