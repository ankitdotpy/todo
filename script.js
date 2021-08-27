$(()=>{
    let inpTask = $('#inpTask');
    let ulTask = $('#ulTask');
    let btnAdd = $('#btnAdd');
    let btnClear = $('#btnClear');
    let btnSort = $('#btnSort');
    let btnReset = $('#btnReset');

    function addItem(){
        if(inpTask.val()!=''){
            var listItem = $('<li>',{
                'class' : 'list-group-item',
                text : inpTask.val()
            });
            
            listItem.click(function(){
                listItem.toggleClass('done');
            });
    
            ulTask.append(listItem);
            inpTask.val('');
        }
    }

    function toggleButtons(){
            $('#btnAdd').prop('disabled',inpTask.val() == '');
            $('#btnReset').prop('disabled',inpTask.val() == '');
            $('#btnClear').prop('disabled',ulTask.children().length<1);
            $('#btnSort').prop('disabled',ulTask.children().length<1);
    }

    inpTask.on('input',()=>{
        toggleButtons();
    })

    function sortTasks(){
        // select the done tasks and append to the #ulTask
        $('#ulTask .done').appendTo('#ulTask');
    }

    function cleanup(){
        // This function will remove all the done tasks
        $('#ulTask .done').remove();
    }

    // Checking if there is input in input element or not
    inpTask.on

    btnAdd.click(()=>{
        addItem();
        toggleButtons();
    });

    inpTask.keypress((e)=>{
        if(e.which==13) addItem();
        toggleButtons();
    });

    btnReset.click(function(){
        inpTask.val('');
        toggleButtons();
    });

    btnClear.click(cleanup);

    btnSort.click(sortTasks);
});