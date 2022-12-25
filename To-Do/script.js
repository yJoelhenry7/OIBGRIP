window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const title = document.querySelector("#new-task-title");
	const desc = document.querySelector('#new-task-desc');
	const dateval = document.querySelector('#new-task-date');
	const table_el = document.querySelector('#table');
	const complete_tab = document.querySelector('#complete-tab');
	const complete_head = document.querySelector('#complete_head')
	const task_head = document.querySelector('#task_head')

	form.addEventListener('submit', (e) => {
      e.preventDefault();
	  const titleInput = title.value;
	  const descInput = desc.value;
	  const dateInput = dateval.value;
	  task_head.classList.remove('hide')
	  task_head.classList.add('unhide')
	  task_el = document.createElement('tr');
	  table_el.appendChild(task_el)
	  title_el = document.createElement('td')
	  title_el.textContent = titleInput;
	  task_el.appendChild(title_el)

	  desc_el = document.createElement('td');
	  desc_el.textContent = descInput;
	  task_el.appendChild(desc_el);

	  date_el = document.createElement('td');
	  date_el.textContent = dateInput;
	  task_el.appendChild(date_el);

      delete_el = document.createElement('td');
	  delete_btn = document.createElement('button');
	  delete_btn.classList.add('delete');
	  delete_btn.innerText = 'Delete';
      delete_el.appendChild(delete_btn);
	  task_el.appendChild(delete_el);
 
	  complete_el = document.createElement('td');
	  complete_btn = document.createElement('button');
	  complete_btn.classList.add('complete');
	  complete_btn.innerText = 'Completed';
	  complete_el.appendChild(complete_btn);
      task_el.appendChild(complete_el);




	  delete_el.addEventListener('click', (e) => {
		table_el.removeChild(task_el)
	});

	complete_el.addEventListener('click', (e) => {
		complete_head.classList.remove('hide')
		complete_head.classList.add('unhide')
		complete = document.createElement('tr')
        complete_tab.appendChild(complete)
		complete_title = document.createElement('td')
		complete_title.textContent = titleInput;
		complete.appendChild(complete_title)
        complete_desc = document.createElement('td');
		complete_desc.textContent = descInput;
		complete.appendChild(complete_desc);
		com_del = document.createElement('td')
		completed_del = document.createElement('button')
		completed_del.classList.add('comdel');
		completed_del.innerText = 'Delete';
		com_del.appendChild(completed_del)
		complete.appendChild(com_del)
		table_el.removeChild(task_el)
	});
	completed_del.addEventListener('click',(e)=>{
		complete_tab.removeChild(complete);
	})
	  
	});
});