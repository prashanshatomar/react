import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state={
        counters : [
            { id:1,value :4},
            { id:2,value :0},
            { id:3,value :0},
            { id:4,value :0}       
        ]
    };
    handleDelete = (counterId) =>{
        console.log("event handler delete clicked  ",counterId);
        const counters_ = this.state.counters.filter(c => c.id !==counterId);
        this.setState({counters:counters_})
    }
    handleReset = () =>{
        
        const counters = this.state.counters.map(c=>{
            c.value = 0;
            return c;
        });
        this.setState({counters})
        console.log(this.state.counters)
    }
    render() {
        // console.log('props  ',this.props)
        return (
            <div>
                <button
                onClick={this.handleReset}                
                className="btn btn-primary">Reset</button>
                {/* <Counter />
                <Counter />
                <Counter />
                <Counter /> */}
                {this.state.counters.map(counter=> 
                <Counter 
                key={counter.id} 
                onDelete={this.handleDelete}
                // value={counter.value} 
                // selected={true} 
                // id={counter.id}
                counter={counter}                 
                >
                <h3>Counter # {counter.id}</h3>
                </Counter>
                )
                }
            </div>
        ) 
        /**
         * Note : key and id have same value, code repitio becz,
         * here we are passing key and id
         * Why to be pass id and key while there values are same, unnecessary repetition
         * This is why becz the key attribute is use by reactjs internally, so that we wouldnot able to access this key attribute in Counter component that's why we needed to use id seperately
         * 
         */
    }
}
export default Counters;