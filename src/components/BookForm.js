import AddCircleIcon from '@mui/icons-material/AddCircle';
import styled from 'styled-components';

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
				<p>
					<label htmlFor="title">Title: </label>
					<Input
						type="text"
						id="title"
						name="title"
						placeholder="Moby Dick"
						required
						style={{width: '200px'}}
					/>
				</p>
				<p>
					<label htmlFor="author">Author: </label>

					<Input
						type="text"
						id="author"
						name="author"
						placeholder="Herman Melville"
						required
						style={{width: '200px'}}
					/>
				</p>
				<p>
					<label htmlFor="rating">Rating: </label>
					<Input id="rating" type="number" min="1" max="10" name="rating" required />
				</p>
				<p style={{verticalAlign: 'middle'}}>
					<label htmlFor="readingNotes">Reading Notes: </label>
					<Textarea
						id="readingNotes"
						type="textarea"
						rows="6"
						cols="18"
						name="readingNotes"
						placeholder="I didn't like the protagonist"
					/>
				</p>
				<AddButton type="submit">
					<AddCircleIcon style={{height: '45px', width: '45px'}} />
				</AddButton>
			</Fieldset>
		</form>
	);
}

const Fieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-top: 55px;
	border: none;
	background-color: #fbf8cc;
	box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
`;

const AddButton = styled.button`
	align-self: flex-end;
	width: 55px;
	height: 55px;
	margin: 0.5em 15px 0;
	padding: 0.25em 0.25em;
	border: none;
	background-color: transparent;
	color: #76b5c5;
	&:hover {
		background: #c39696;
	}
`;

const Input = styled.input`
	border: transparent;
	border-radius: 5px;
`;

const Textarea = styled.textarea`
	border: transparent;
	border-radius: 5px;
	vertical-align: top;
`;
