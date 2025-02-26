// import React, { useState } from "react";
// import { Container, Form, Button } from "react-bootstrap";

// const TaskNewForm = () => {
//   const [task, setTask] = useState({
//     taskName: "",
//     itemName: "",
//     description: "",
//     assignedMember: "",
//   });

//   const handleChange = (e) => {
//     setTask({ ...task, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Task Created:", task);
//     alert("Task Added Successfully!");
//   };

//   return (
//     <Container className="d-flex justify-content-center align-items-center ">
//       <div className="task-form p-4 rounded shadow-sm  w-100" >
//         <h3 className="text-center mb-4">Add New Task</h3>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
            
//             <Form.Control
//               type="text"
//               name="taskName"
//               placeholder="Enter task name"
//               value={task.taskName}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Item Name</Form.Label>
//             <Form.Select name="itemName" value={task.itemName} onChange={handleChange} required>
//               <option value="">Select an item</option>
//               <option value="Item 1">Item 1</option>
//               <option value="Item 2">Item 2</option>
//               <option value="Item 3">Item 3</option>
//             </Form.Select>
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={3}
//               name="description"
//               placeholder="Enter task description"
//               value={task.description}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Label>Assign Members</Form.Label>
//             <Form.Select name="assignedMember" value={task.assignedMember} onChange={handleChange} required>
//               <option value="">Select a member</option>
//               <option value="John Smith">John Smith</option>
//               <option value="Jane Doe">Jane Doe</option>
//               <option value="Mike Johnson">Mike Johnson</option>
//             </Form.Select>
//           </Form.Group>

//           <Button variant="primary" type="submit" className="w-100 purple-btn">
//             Add Task
//           </Button>
//         </Form>
//       </div>
//     </Container>
//   );
// };

// export default TaskNewForm;


import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Select from "react-select";

const TaskNewForm = ({setShowAddTask}) => {
  const [task, setTask] = useState({
    taskName: "",
    itemName: [], // Array for multiple selections
    description: "",
    assignedMember: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  // Handle multi-select change
  const handleMultiSelectChange = (selectedOptions) => {
    const values = selectedOptions ? selectedOptions.map((option) => option.value) : [];
    setTask({ ...task, itemName: values });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Task Created:", task);
    alert("Task Added Successfully!");
    setShowAddTask(false);

  };

  // Options for multi-select dropdown
  const itemOptions = [
    { value: "Item 1", label: "Item 1" },
    { value: "Item 2", label: "Item 2" },
    { value: "Item 3", label: "Item 3" },
    { value: "Item 4", label: "Item 4" },
  ];

  return (
    <Container>
      <div className="task-form  rounded shadow-sm">
 
        <Form onSubmit={handleSubmit}>
          {/* Task Name Input */}
          <Form.Group className="mb-3">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              type="text"
              name="taskName"
              placeholder="Enter task name"
              value={task.taskName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Multi-Select Dropdown */}
          <Form.Group className="mb-3">
            <Form.Label>Item Name (Select Multiple)</Form.Label>
            <Select
              isMulti
              name="itemName"
              options={itemOptions}
              value={itemOptions.filter((option) => task.itemName.includes(option.value))}
              onChange={handleMultiSelectChange}
              className="basic-multi-select"
              classNamePrefix="select"
              placeholder="Select items..."
              closeMenuOnSelect={false} // Yeh important hai
            />
          </Form.Group>

          {/* Description Input */}
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              placeholder="Enter task description"
              value={task.description}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Assign Members Dropdown */}
          <Form.Group className="mb-3">
            <Form.Label>Assign Members</Form.Label>
            <Form.Select
              name="assignedMember"
              value={task.assignedMember}
              onChange={handleChange}
              required
            >
              <option value="">Select a member</option>
              <option value="John Smith">John Smith</option>
              <option value="Jane Doe">Jane Doe</option>
              <option value="Mike Johnson">Mike Johnson</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Add Task
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default TaskNewForm;

