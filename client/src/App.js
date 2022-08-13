import './App.css';
import AddIdea from './components/AddIdea';
import Header from './components/Header';
import IdeaList from './components/IdeaList';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MindMap from './components/MindMap';

function App() {
	return (
		<div className='App'>
			<GlobalProvider>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path='/' element={<IdeaList />} />
						<Route path='/addIdea' element={<AddIdea />} />
						<Route path='/mindMap' element={<MindMap />} />
					</Routes>
				</BrowserRouter>
			</GlobalProvider>
		</div>
	);
}

export default App;
