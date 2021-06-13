import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import mtg from "mtgsdk";

const Search = () => {
	const endpoint = "https://api.magicthegathering.io/v1";
  const [cardImg, setCardImg] = useState("")
	const formik = useFormik({
		initialValues: {
			name: "",
		},
		onSubmit: (values) => {
			mtg.card.where({ name: `${values.name}` }).then((cards) => {
				console.log(cards[0])
        setCardImg(cards[0].imageUrl)
			});
		},
	});

	return (
    <>
		<form onSubmit={formik.handleSubmit}>
			<input
				name="name"
				id="name"
				type="text"
				onChange={formik.handleChange}
				value={formik.values.name}
        placeholder="Enter a card name"
			/>
      <br></br>
			<button>Search</button>
		</form>
    <br></br>
    <div>
      <img src={cardImg} />
    </div>
    </>
	);
};

export default Search;
