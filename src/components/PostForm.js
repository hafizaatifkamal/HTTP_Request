import React, { Component, useState } from "react";
import axios from "axios";


const PostForm = () => {


	const [ userId, setUserId] = useState();
	const [ title, setTitle] = useState();
	const [ body, setBody] = useState();

	
	const changeHandlerUserId = (e) => {
		
		setUserId(e.target.value)
	}

	const changeHandlerTitle = (e) => {
		
		setTitle(e.target.value)
	}

	const changeHandlerBody = (e) => {
		
		setBody(e.target.value)
	}

	const submitHandler = e => {
		e.preventDefault();


			
		const newData = {userId: userId, id: 101, title: title, body: body}
		const abc =
		axios
			.post("https://jsonplaceholder.typicode.com/posts", newData);
			console.log(newData, abc);
	}


	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<input 
						type="text"
						name="userId"
						value={userId}
						onChange={changeHandlerUserId}
					/>
				</div>
				<div>
					<input
						type="text"
						name="title"
						value={title}
						onChange={changeHandlerTitle}
					/>
				</div>
				<div>
					<input
						type="text"
						name="body"
						value={body}
						onChange={changeHandlerBody}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}

export default PostForm;