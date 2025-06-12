import Swal from "sweetalert2";

const RightSide = () => {
  const handlesumit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    if (email) {
      Swal.fire({
        title: " Subscribe Success !",
        icon: "success",
        draggable: true,
        timer: 1500,
      });

      e.target.reset()
    }
  };
  return (
    <div>
      <div>
        <h1 className="uppercase font-bold  border-b py-4  text-[#7f8c8d] border-base-300 ">
          category
        </h1>

        <div className=" flex flex-col">
          <button className="btn rounded-0"> Lifestyle</button>
          <button className="btn rounded-0"> Food </button>
          <button className="btn rounded-0"> Travel </button>
          <button className="btn rounded-0"> Health & Fitness</button>
          <button className="btn rounded-0"> Entertainment </button>
          <button className="btn rounded-0">Personal Development </button>
          <button className="btn rounded-0"> Education </button>
          <button className="btn rounded-0"> Technology </button>
        </div>
      </div>
      <div>
        <h1 className="uppercase font-bold  border-b py-4  text-[#7f8c8d] border-base-300 ">
          Subscribe
        </h1>

        <p className="text-[#7f8c8d] text-sm py-4">
          Subscribe for the newsletter and receive email <br /> notification of
          every future post.
        </p>

        <form onSubmit={handlesumit} className="space-y-5" action="">
          <input
            name="email"
            placeholder="type your email"
            className="border text-center border-base-300 w-full py-2 placeholder:px-4"
            type="email"
          />{" "}
          <br />
          <button className="tom-btn bg-black uppercase w-full">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default RightSide;
