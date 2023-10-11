import { useState } from 'react';
import { Playground } from './playground/Playground';
import { NativeEditors } from './nativeEditors/NativeEditors';
import 'sequential-workflow-designer/css/designer.css';
import 'sequential-workflow-designer/css/designer-light.css';
import 'sequential-workflow-designer/css/designer-dark.css';
import NavBar from './commponents/NavBar';

const pathKey = 'swdReactPath';
type AppPath = 'playground' | 'nativeEditors';

export function App() {
	const [path, setPath] = useState<AppPath>((localStorage[pathKey] as AppPath) || 'playground');

	function changePath(path: AppPath) {
		localStorage[pathKey] = path;
		setPath(path);
	}

	return (
		<>
			<NavBar onClick={() => changePath('playground')} path={path} />
			{path === 'playground' && <Playground />}
		</>
	);
}
