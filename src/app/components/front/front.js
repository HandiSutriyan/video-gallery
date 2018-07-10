import React, {Component} from 'react'
import classNames from 'classnames'
import axios from 'axios'

export default class Front extends Component{
	constructor(props){
		super(props);
		this.state={
			search:'',
			initialItems:[
				{
					title:"Video 1",
					url : "https://mystorage/video1.jpg"
				},
				{
					title:"Video 2",
					url : "https://mystorage/video2.jpg"
				},
				{
					title:"Video 3",
					url : "https://mystorage/video3.jpg"
				},
			],		
		}
	}
	
	handleFilter(event){
    this.setState({search: event.target.value});
	}
	handleGetData(){
		const self=this
		axios({
			method :'get',
			url:'https://dog.ceo/api/breed/boxer/images',
			headers:{
                    "Content-Type":"application/json"
            },
		}).then(function(response){
			console.log(response.data)
			self.setState({videos: response.data})
			console.log(self.state.videos.message)
		})
	}
	render(){
		const dataFilter= this.state.initialItems.filter((filter)=>{
			return filter.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;			
		});
		
		return(
			<div className='coba' >
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
						<h3>Cari Video</h3>
						<form>
					        <fieldset className="form-group">
						        <div class="input-group">
							      <div class="input-group-prepend">
							        <span class="input-group-text" id="basic-addon1"><i className='fas fa-search'></i></span>
							      </div>
							       <input type="text" className="form-control form-control-lg" placeholder="Search" value={this.state.search} onChange={this.handleFilter.bind(this)} />
							    </div>
					        </fieldset>
					      </form>
						<hr/>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-12'>
							<table className='table'>
						      <tr>
						      	<th scope="column">No</th>
						      	<th scope="column">Daftar Video </th>
						      	<th scope="column">URL</th>
						      </tr>
						      	{dataFilter.map((item,i)=>{
									return <tr key={i}>
									<th scope="row">{i+1}</th>
									<td>{item.title}</td>
									<td>{item.url}</td>
									</tr>
								})}
						      </table>
						</div>
					</div>
				</div>

			</div>
		)
	}
}