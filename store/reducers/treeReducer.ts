const treeState = {
    name: 'Folder Name',
    id: 1,
    parentId: 0,
    isFolder: false,
    children: [{
        name: 'First Level',
        id: 2,
        parentId: 1,
        isFolder: false,
        children: [{
            name: 'Second Level',
            id: 3,
            parentId: 2,
            isFolder: false,
            children: [{
                name: 'Third Level',
                id: 4,
                parentId: 3,
                isFolder: false,
                children: [{
                    name: 'myDocument',
                    isFolder: false,
                    children: []
                }]
            }],
        },
        {
            name: 'Second level-2',
            id: 2.2,
            parentId: 2,
            isFolder: false,
            children: []
        }

        ]
    }]
};

export const treeReducer = (state = treeState, action) => {
    switch (action.types) {
        case "ADD_FOLDER":
            return { ...state, }

        default:
            return state;
    }
}