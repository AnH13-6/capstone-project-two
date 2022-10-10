import styled from 'styled-components';

import Button from './StyledButton';

export default function BookForm({books, onHandleBooks}) {
	return (
		<form
			onSubmit={async event => {
				event.preventDefault();
				const formData = new FormData(event.target);
				const formValues = Object.fromEntries(formData);
				try {
					const response = await fetch('/api/books', {
						method: 'POST',
						body: JSON.stringify(formValues),
						headers: {'Content-Type': 'application/json'},
					});
					if (response.ok) {
						const data = await response.json();
						console.log('returned book:', data);
						onHandleBooks([...books, data]);
					} else {
						throw new Error('post failed');
					}
				} catch (error) {
					console.log(error);
				}
			}}
		>
			<Fieldset>
				<div>
					<label htmlFor="title">Title: </label>
					<input
						type="text"
						name="title"
						placeholder="Moby Dick"
						required
						style={{width: '200px'}}
					></input>
				</div>
				<div>
					<label htmlFor="author">Author: </label>

					<input
						type="text"
						name="author"
						placeholder="Herman Melville"
						required
						style={{width: '200px'}}
					></input>
				</div>
				<div>
					<label htmlFor="rating">Rating: </label>
					<input type="number" min="1" max="10" name="rating" required></input>
				</div>
				<Button type="submit">Add</Button>
			</Fieldset>
		</form>
	);
}

const Fieldset = styled.fieldset`
	display: grid;
	gap: 8px;
	justify-content: center;
	margin-top: 55px;
`;
