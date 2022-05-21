namespace $ {

	export type $hyoo_ergo_proposal_status = 'opened' | 'completed' | 'closed'

	export class $hyoo_ergo_proposal extends $mol_object2 {

		id(): string {
			throw new Error('Not defined')
		}

		domain(): $hyoo_ergo_domain {
			throw new Error('Not defined')
		}

		state() {
			return this.domain().state().doc('hyoo_ergo_proposal').doc(this.id())
		}

		status(next?: $hyoo_ergo_proposal_status) {
			const str = this.state().sub('status').value(next) ?? 'opened'
			return (str as typeof next)!
		}

		what(next?: string) {
			return this.state().sub('what').text(next)
		}

		reason(next?: string) {
			return this.state().sub('reason').text(next)
		}

		creator(next?: $hyoo_ergo_person) {
			const id = this.state().sub('creator').value(next && next.id())
			if(!id) throw new Error('Creator is required')
			return this.domain().person( String(id) )
		}

		moment(next?: $mol_time_moment) {
			const str = this.state().sub('moment').value(next && next.toString())
			if (!str) throw new Error('Moment is required')
			return new $mol_time_moment( String(str) )
		}

	}

}
