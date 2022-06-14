import React, { useState } from 'react'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'

const Chat = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

	return (
		<ChatEngine
			height='100vh'
			userName='Musab1258'
			userSecret='Mentorship'
			projectID='c99f459b-59b2-42d0-afff-6c59395e2481'
			renderNewChatForm={(creds) => renderChatForm(creds)}
		/>
	)
}

export default Chat;