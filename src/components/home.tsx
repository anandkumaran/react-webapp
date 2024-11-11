const HomePage = ({ value, setValue }: any) => {
  return (
  <div>
    <p>This will Value changes by using Props from App: {value}</p>
    <button onClick={() => setValue('New Value')}>Update Value</button>

    <br />
    <br />
    <p>This will Value changes by using Props from App: {value}</p>
        <button onClick={() => setValue('New Value')}>Update Value</button>
    </div>
  );
};

export default HomePage;