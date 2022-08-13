import React, { useContext, useCallback, useState, useEffect } from 'react';
import ReactFlow, {
	MiniMap,
	Controls,
	applyEdgeChanges,
	applyNodeChanges,
	addEdge,
	useNodesState,
	useEdgesState,
} from 'react-flow-renderer';
import { GlobalContext } from '../context/GlobalState';

const MindMap = () => {
	const {
		setIdea,
		setEdge,
		ideas: idea,
		edges: edge,
	} = useContext(GlobalContext);

	// const [nodes, setNodes] = useState(idea);
	// const [edges, setEdges] = useState(edge);

	// const onNodesChange = useCallback(
	// 	(changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
	// 	[setNodes]
	// );
	// const onEdgesChange = useCallback(
	// 	(changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
	// 	[setEdges]
	// );
	// const onConnect = useCallback(
	// 	(connection) => setEdges((eds) => addEdge(connection, eds)),
	// 	[setEdges]
	// );

	// useEffect(() => {
	// 	setIdea(nodes);
	// 	setEdge(edges);
	// }, [nodes, edges, setIdea, setEdge]);

	const [nodes, , onNodesChange] = useNodesState(idea);
	const [edges, setEdges, onEdgesChange] = useEdgesState(edge);

	const onConnect = useCallback(
		(params) => setEdges((eds) => addEdge(params, eds)),
		[]
	);

	return (
		<>
			<ReactFlow
				nodes={nodes}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				style={{ width: '100%', height: '90vh' }}
				fitView>
				<MiniMap />
				<Controls />
			</ReactFlow>
		</>
	);
};

export default MindMap;
