namespace $.$$ {

	interface Thesis {
		id: string
		edition: string
		moment: string
		creator: string
	}

	interface Person {
		id: string
		name: string
	}

	interface Comment {
		id: string
		creator: Person
		message: string
		moment: string
	}

	interface Request {
		id: string
		creator: Person
		moment: string
		edition: string
		status: 'review' | 'acepted' | 'rejected'
		type: 'create' | 'change' | 'split' | 'join'
	}

	interface Edition {
		id: string
		content: string
		request: null | Request
		prev: null | string
		next: null | string
	}

	export class $hyoo_ergo_thesis extends $mol_object2 {

		id(): string {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		domain(): $hyoo_ergo_domain {
			return this.$.$mol_fail(new Error('Not defined'))
		}

		@ $mol_mem
		state() {
			return this.domain().state().doc( 'hyoo_ergo_thesis' ).doc( this.id() )
		}

		draft(next?: boolean) {
			return this.state().sub('draft').value(next) ?? true
		}

		moment(next?: $mol_time_moment) {
			const str = this.state().sub('moment').value( next && next.toString() )
			return str ? new $mol_time_moment( String(str) ) : null
		}

		creator(next?: $hyoo_ergo_person) {
			const id = this.state().sub('person').value(next && next.id())
			return id ? this.domain().person( String(id) ) : null
		}

		edition(next?: $hyoo_ergo_edition) {
			const id = this.state().sub('edition').value(next && next.id())
			return id ? this.domain().edition( String(id) ) : null
		}

		requests(next?: $hyoo_ergo_request[]) {
			const ids = this.state().sub('requests').list(next && next.map( obj => obj.id() ))
			return ids.map( id => this.domain().request( String(id) ) )
		}

	}

}
