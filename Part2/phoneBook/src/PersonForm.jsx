export const PersonForm = ({onSubmit, newName,handleChange,newPhone,handleChangePhone }) => (
    
    <form onSubmit={onSubmit}>
        <div>
          name: <input type='text' 
                value={newName}
                onChange={handleChange} 
                />

        </div>
        <div>
          phone:<input type='tel'
          value={newPhone.toString()}
          onChange= {handleChangePhone }  />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
)