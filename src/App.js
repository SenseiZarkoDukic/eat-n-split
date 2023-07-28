import { useState } from "react";

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
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }
  const data = initialFriends;
  const [newFriend, setNewFriend] = useState("");
  const friends = [...data, newFriend];
  console.log(friends);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} onShowAddFriend={setShowAddFriend} />
        {showAddFriend && (
          <FormAddFriend
            data={data}
            onNewFriend={setNewFriend}
            newFriend={newFriend}
          />
        )}

        <Button onClick={handleShowAddFriend}>
          {!showAddFriend ? "Add friend" : "Close"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList({ friends }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            key={friend.id}
            name={friend.name}
            src={friend.image}
            balance={friend.balance}
            friend={friend}
          />
        ))}
      </ul>
    </div>
  );
}

function Friend({ name, src, balance }) {
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

function FormAddFriend({ data, onNewFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?u=${id}`,
      balance: 0,
    };
    onNewFriend(newFriend);
    console.log(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  onNewFriend("");
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼️ Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill(friend) {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH SARAH</h2>
      <label>💰 Bill value</label>
      <input type="text" />
      <label>🧍‍♀️ Your expense</label>
      <input type="text" />

      <label>👯‍♀️ X's expense</label>
      <input type="text" disabled />
      <label>🤑 Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
