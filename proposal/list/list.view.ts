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

		proposal_comment(id: string) {
			return this.proposal(id).comments().slice(-1)[0].message()
		}

		rows() {
			const filter = this.thesis().proposals().filter( obj => obj.status() === this.filter() )
			return filter.map( obj => this.Proposal(obj.id()) )
		}

		page_body() {
			if (this.rows().length === 0) return [this.Filter(), this.Empty()]
			return [this.Filter(), this.List()]
		}

	}

}
