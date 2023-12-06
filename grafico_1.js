import Probability from '@salesforce/schema/Opportunity.Probability';
import { LightningElement, wire } from 'lwc';

export default class SliderExample extends LightningElement {
    myValue = 80; //Esse valor myValue tem que ser adicionado uma Trigger, flow
                  //ou DML para poder se comunicar com o campo da oportunidade

    handleChange(event) {
        this.myValue = event.detail.value;
    }
}

