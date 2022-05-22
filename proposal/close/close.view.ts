namespace $.$$ {

	export class $hyoo_ergo_proposal_close extends $.$hyoo_ergo_proposal_close {

		close() {
			this.proposal().status('closed')
			this.$.$mol_state_arg.value('proposal_close', null)
		}

	}

}
