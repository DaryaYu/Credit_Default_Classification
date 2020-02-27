$.ajaxSetup({
  url: '/predict',
  type: 'POST',
  dataType: 'json',
  error: function(req, text, error){
    console.error('Error: ' + text + ' | ' + error);
  },
});

$(function(){
  $('#predict-form').on('submit', function(e){
    e.preventDefault();
    var $that = $(this),
    formData = new FormData($that.get(0)); // создаем новый экземпляр объекта и передаем ему нашу форму (*)
    $.ajax({
      contentType: false, // важно - убираем форматирование данных по умолчанию
      processData: false, // важно - убираем преобразование строк по умолчанию
      data: formData,
      success: function(data){
        if(data){
          $('#prediction-text-label').html(data.prediction_text);
        }
      }
    });
  });
});
