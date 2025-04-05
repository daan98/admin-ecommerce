

const layout = async ({ children } : { 
    children: React.ReactNode
}) => {
    /* 
    TODO: [ ] CHECK IF THE USER IF LOGGED IN, IF NOT REDIRECT TO LOGIN PAGE
    TODO: [ ] RETRIEVE STORE INFORMATION, BASED ON THE USER ID.
    TODO: [ ] IF STORE DOES EXIST, REDIRECT TO THE STORE PAGE. OTHERWISE SHOW THE CHILDREN IN THIS PAGE.
     */

    /* const onOpen = useStoreModal((state) => state.OnOpen);
    const isOpen = useStoreModal((state) => state.isOpen);
    
      useEffect(() => {
        if (!isOpen) {
          onOpen();
        }
      }, [isOpen, onOpen]); */
    return (
        <div>root layout</div>
    )
}

export default layout