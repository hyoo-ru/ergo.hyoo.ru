namespace $.$$ {

	export class $hyoo_ergo extends $.$hyoo_ergo {

		user() {
			return this.domain().user()
		}

		user_id() {
			return this.user().id()
		}

		user_opened() {
			return this.$.$mol_state_arg.value('user')
		}


		thesis_new_opened() {
			return this.$.$mol_state_arg.value('thesis_new') === ''
		}

		thesis_opened() {
			return this.$.$mol_state_arg.value('thesis')
		}

		thesis() {
			return this.domain().thesis().item( this.thesis_opened()! )
		}


		proposal_list_opened() {
			return this.$.$mol_state_arg.value('proposals')
		}

		proposal_list_thesis() {
			return this.domain().thesis().item( this.proposal_list_opened()! )
		}

		proposal_new_opened() {
			return this.$.$mol_state_arg.value('proposal_new')
		}

		proposal_new_thesis() {
			return this.domain().thesis().item( this.proposal_new_opened()! )
		}

		thesis_edit_opened() {
			return this.$.$mol_state_arg.value('thesis_edit')
		}

		proposal_thesis_edit() {
			return this.domain().proposal( this.thesis_edit_opened()! )
		}

		proposal_close_opened() {
			return this.$.$mol_state_arg.value('proposal_close')
		}

		proposal_close() {
			return this.domain().proposal( this.proposal_close_opened()! )
		}

		pages() {

			this.domain().state().socket()
			this.domain().index().state().sync()

			return [
				this.Index_page(),
				... this.thesis_new_opened() ? [this.Thesis_new_page()] : [],
				... this.thesis_opened() ? [this.Thesis_page()] : [],
				... this.proposal_list_opened() ? [this.Proposal_list_page()] : [],
				... this.proposal_new_opened() ? [this.Proposal_new_page()] : [],
				... this.user_opened() ? [this.User_page()] : [],
				... this.thesis_edit_opened() ? [this.Thesis_edit_page()] : [],
				... this.proposal_close_opened() ? [this.Proposal_close_page()] : [],
			]

		}

	}

}
