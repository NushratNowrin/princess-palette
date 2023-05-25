$('button').click(function(){
  
    // eslint-disable-next-line no-undef
    swal({
    title: 'Are you sure?',
    text: "It will permanently deleted !",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(function() {
    // eslint-disable-next-line no-undef
    swal(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    );
  })
    
  })