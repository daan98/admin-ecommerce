
const ErrorPage = ({message} : {message : String | null}) => {
  return (
      <div className="w-full h-full flex justify-center items-center">
          {message ? (
            <h1 className="bg-red-600 font-bold">{ message }</h1>
          ) : (
            <h1>Sorry, something went wrong</h1>
          )}
      </div>
  )
}

export default ErrorPage;