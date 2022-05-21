namespace $.$$ {

	export class $hyoo_ergo_proposal_list extends $.$hyoo_ergo_proposal_list {

		proposal(id: string) {
			return this.domain().proposal(id)
		}

		thesis_id() {
			return this.$.$mol_state_arg.value('proposals')!
		}

		proposal_id(id: string) {
			return id
		}

		proposal_moment(id: string) {
			return this.proposal(id).moment().toString('YY-MM-DD hh:mm')
		}

		proposal_creator_id(id: string) {
			return this.proposal(id).creator().id()
		}

		proposal_creator_name(id: string) {
			return '@' + this.proposal(id).creator().name()
		}

		proposal_reason(id: string) {
			return `${this.proposal(id).what()}: ${this.proposal(id).reason()}`
		}

		rows() {
			return this.thesis().proposals().map( obj => this.Proposal(obj.id()) )
		}

		page_body() {
			return this.thesis().proposals().length > 0 ? [this.List()] : [this.Empty()]
		}

	}

}
