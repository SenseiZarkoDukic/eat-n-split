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
      <div className="sidebar">
        <FriendsList data={data} />
        <FormAddFriend />
        <Button>Add friend</Button>
      </div>
    </div>
  );
}

function FriendsList({ data }) {
  return (
    <div>
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
        <Button>Select</Button>
      </li>
    </>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input type="text" />
      <label>🖼️ Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}
