// useState
function useState(initialValue) {
    let state = initialValue;

    function setState(newState) {
        state = newState;
    }

    return [state, setState];
}

//end useState

// useEffect
let previousDeps = [];
function useEffect(callback, dependencies) {
    const dependenciesChanged = dependencies.some(
        (dep, index) => !Object.is(dep, previousDeps[index])
    );

    if (dependenciesChanged || previousDeps.length === 0) {
        callback();
        previousDeps = dependencies;
    }
}

//end useEffect

const [isLogin, setIsLogin] = useState(false);

useEffect(() => {
    console.log(isLogin); 
}, [isLogin])