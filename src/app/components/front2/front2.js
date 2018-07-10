import React, {Component} from 'react'
import classNames from 'classnames'
import axios from 'axios'

export default class Front2 extends Component{
	constructor(props){
		super(props);
		this.state={
			videos:[]
		}
	}
	
	handleFilter(event){
    this.setState({search: event.target.value});
  }
	componentWillMount(){
		console.log('willmount');
		const self=this;
		axios({
			method :'get',
			url:'https://dog.ceo/api/breed/boxer/images',
			headers:{
                    "Content-Type":"application/json"
            },
		}).then(function(response){
			console.log(response.data.message)
			self.setState({videos: response.data.message})
			console.log(self.state.videos.message)
		})
	}
	render(){
		const videos= this.state.videos;
		console.log(Math.round(videos.length/4))
		return(
			<section>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<h3>Gallery Video</h3>
							<hr></hr>
						</div>
					</div>
					<div className='row '>
						{videos.map((item,i)=>{
						return(
							<div className=' d-flex flex-row justify-content-start col-md-3 px-0 px-1' style={{marginBottom:'10px'}}>
								<img src={item} className="img img-fluid" width='330px' height='220' style={{objectFit:'cover'}}/>
							</div>
							)
						})}
					</div>
				</div>
			</section>
		)
	}
}