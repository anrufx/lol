//Scene, Camera, Renderer
let renderer = new THREE.WebGLRenderer();
let scene = new THREE.Scene();
let aspect = window.innerWidth/window.innerHeight;
let camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1500);
let cameraRotation = 0;
let cameraRotationSpeed = 0.001;
let cameraAutoRotation = true;
let orbitControls = new THREE.OrbitControls(camera);

// Lights
let spotlight = new THREE.SpotLight(0xffffff, 1, 0, 10, 2);

// Texture Loader
let textureLoader = new THREE.TextureLoader();

//Planet Proto
let planetProto= {
 sphere: function (size) {
   let sphere = new THREE.SphereGeometry(size, 32, 32);

   return sphere;
},
material: function (options){
    let material = new THREE.MeshPhongMaterial();
    it (options);{
    for (var property in options) { 
        material[property] = options[property];
    }
}

    return material;
},
glowMaterial: function (intensity, fade, color) {
// Custom glow shader from https://github.com/stemkoski/stemkoski.github.com/tree/master/Three.js
let glowMaterial = new THREE.ShaderMaterial(),{ 
    uniforms: {
'c':{
type: 'f',
value: intensity },

'p': {
type: 'f',
value: fade },

glowColor: {
type: 'c'
value:new THREE.Color(color)},

viewVector: {
type: 'v3',
value: camera.position}},


vertexShader:
 uniform vec3 viewVector;
 uniform float c;
 uniform float p;
 varying float intensity; 
 void main() {
  vec3 vNormal = normalize(normalMatrix * normal); 
  vec3 vNormel = normalize( normalMatrix * viewVector);
  intensity = pow(c- dot(vNormal, vNormel), p);
  gl_Position = projectionMatrix * modelViewMatrix*vec4( position, 1.0);
 }',
 
  fragmentShader:'
uniform vec3 glowColor; 
varying float intensity; 
void main()
{
vec3 glow = glowColor * intensity;
gl_FragColor= vec4( glow, 1.0);
}',

















}
}