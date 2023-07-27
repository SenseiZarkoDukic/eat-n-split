const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const data = initialFriends;
  return (
    <div className="app">
      <FriendsList data={data} />
    </div>
  );
}

function FriendsList({ data }) {
  return (
    <div className="sidebar">
      <ul>
        {data &&
          data.map((f) => (
            <Friend
              key={f.id}
              name={f.name}
              src={f.image}
              balance={f.balance}
            />
          ))}
      </ul>
      <button className="button">Add friend</button>
    </div>
  );
}

function Friend({ key, name, src, balance }) {
  return (
    <>
      <li>
        <img src={src} alt={name} />{" "}
        <div>
          <h3>{name}</h3>

          {balance > 0 ? (
            <p className="green">{`${name} owes you ${balance}€`}</p>
          ) : balance < 0 ? (
            <p className="red">{`You owe ${name} ${Math.abs(balance)}€`}</p>
          ) : (
            <p>You and {name} are even</p>
          )}
        </div>
        <button className="button">Select</button>
      </li>
    </>
  );
}
