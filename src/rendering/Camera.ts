class Camera {
    public renderers: Renderer[] = [];

    public transform: Matrix4 = Matrix4.getIdentity();

    constructor(canvas: HTMLCanvasElement) {
        gl = canvas.getContext("webgl") as WebGLRenderingContext;

		if (gl == null) {
			throw new Error("WebGL is not supported.");
        }

        window.addEventListener("resize", (e: Event) => this.onResize());
        this.onResize();
    }

    public getProjectionMatrix(): Matrix4 {
       return Matrix4.getProjection();
    }

    public render() {
        gl.clearColor(0.9, 0.9, 0.9, 1.0);
        gl.clearDepth(1.0);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);
        gl.enable(gl.CULL_FACE);
        gl.enable(gl.BLEND);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
		
		for (var renderer of this.renderers) {
			renderer.render(this);
		}
    }
    
    public onResize() {
        gl.canvas.width = gl.canvas.clientWidth;
        gl.canvas.height = gl.canvas.clientHeight;
        this.render();
    }

    public getScreenToWorldRay(event: MouseEvent): Ray {
        var rect = gl.canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        x = x / gl.canvas.width * 2 - 1;
        y = y / gl.canvas.height * -2 + 1;

        let projection = this.getProjectionMatrix();
        let viewSpacePoint = Vector3.zero();
        let viewSpaceDirection = new Vector3(x / projection.get(0, 0), y / projection.get(1, 1), -1).normalized();

        let inverseCameraTransform = this.transform.invert();

        return new Ray(inverseCameraTransform.transformPoint(viewSpacePoint), inverseCameraTransform.transformDirection(viewSpaceDirection));
    } 
}